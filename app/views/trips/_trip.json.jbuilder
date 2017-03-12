json.extract! trip, :id, :name, :creator_id, :start_date, :end_date, :timezone_id, :created_at, :updated_at
json.url trip_url(trip, format: :json)
